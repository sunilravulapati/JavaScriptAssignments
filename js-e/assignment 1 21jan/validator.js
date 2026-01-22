function validateTitle(title){
    if(title.length === 0) return "Title is empty"
    if(title.length < 3) return "title should be min 3 characters"
    else return true
}
                      
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    const prioritys = [ 'low' , 'medium' , 'high']
    return prioritys.includes(priority)
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    const given = new Date(date)
    const present = new Date()
    return given > present
}

export {validateTitle,validatePriority,validateDueDate}