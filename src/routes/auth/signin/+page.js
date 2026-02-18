/** Pass through callback error and success message from URL so the sign-in page can display them. */
export function load({ url }) {
	return {
		errorFromUrl: url.searchParams.get('error') ?? null,
		messageFromUrl: url.searchParams.get('message') ?? null
	};
}
