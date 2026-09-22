import { Turnstile } from '@marsidev/react-turnstile'

export default function Widget({ onSuccess, onError }) {

    const site_key = import.meta.env.VITE_APP_SITE_KEY;

    const handleSuccess = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/turnstile-verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ captchaToken: token })
            });

            const result = await response.json();

            if (result.status) {
                onSuccess && onSuccess(result.data);
            } else {
                onError && onError("Verification failed");
            }
        } catch (error) {
            console.error("Error verifying CAPTCHA:", error);
            onError && onError("Verification error");
        }
    };

    return (
        <Turnstile
            siteKey={site_key}
            onSuccess={handleSuccess}
            onError={onError}
            options={{ refreshExpired: "auto" }}
        />
    )
}