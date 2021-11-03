export default function serializeTags(tagsStr = '') {
    return [...new Set(tagsStr.trim().toLowerCase().replaceAll(/\s/g, '').split(','))]
}