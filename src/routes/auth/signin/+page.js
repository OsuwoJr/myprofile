/** Pass through callback error from URL so the sign-in page can display it. */
export function load({ url }) {
	return {
		errorFromUrl: url.searchParams.get('error') ?? null
	};
}
