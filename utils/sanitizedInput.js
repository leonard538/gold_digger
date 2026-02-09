import sanitizeHtml from "sanitize-html";

export function sanitizedInput(data) {
    const sanitizedData = sanitizeHtml(data, {
        allowedTags: [], 
        allowedAttributes: {}
    })

    return sanitizedData
}