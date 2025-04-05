export const safeUrl = (link) => {
	try {
		return new URL(link)
	} catch {
		return null
	}
}
