////////////////   For File Naming Conventions /////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

1. **File names must be in CapitalCase format for Models.**
   - Use CapitalCase (e.g., `UserModel.js`, `RoleModel.js`) for naming model files to denote their purpose clearly.
   - Example:
     ```
     UserModel.js
     RoleModel.js
     ```

2. **Add '.model' for model files.**
   - For clarity, always include '.model' in the model file name (e.g., `UserModel.js`, `RoleModel.js`).
   - Example:
     ```
     UserModel.model.js
     RoleModel.model.js
     ```

3. **Consistent naming for Controllers, Routes, and Services.**
   - Use CapitalCase for naming controller, route, and service files (e.g., `UserController.js`, `UserRoutes.js`, `UserService.js`).
   - Example:
     ```
     UserController.js
     UserRoutes.js
     UserService.js
     ```

4. **Folder names should be in lowercase.**
   - Use lowercase for folder names to maintain consistency and ease of access.
   - Example:
     ```
     models/
     controllers/
     routes/
     services/
     ```

These guidelines aim to establish a consistent naming convention across files and folders, facilitating easier navigation and understanding of the project's structure.




////////////////   For Model /////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

1. **Alphabetical order must be used while adding fields to the Mongoose schema.**
   - When defining fields in a Mongoose schema, arrange them in alphabetical order for consistency and easier readability.
   - Example:
    
     const userSchema = new mongoose.Schema({
         age: {
             type: Number,
             required: true
         },
         email: {
             type: String,
             required: true
         },
         name: {
             type: String,
             required: true
         },
         username: {
             type: String,
             required: true
         }
     });
     ```
     if some new fields are being added must be added in alphabetical order

2. **Variables should be named using camelCase format.**
   - Use camelCase (first word lowercase, subsequent words capitalized) for variable names for readability and convention adherence.
   - Example:
    
     const userSchema = new mongoose.Schema({ ... });
     const userValidationSchema = Joi.object({ ... });
     const User = mongoose.model('User', userSchema);
     ```

3. **Meanful and descriptive names must be employed for variables.**
   - Choose names that clearly describe the purpose or content of the variable for better code comprehension.
   - Example:
    
     const userSchema = new mongoose.Schema({ ... }); // Describes a schema for user data
     const userValidationSchema = Joi.object({ ... }); // Indicates a validation schema for user input
     const User = mongoose.model('User', userSchema); // Represents the model for a user in the database
     ```

4. **Validation rules using Joi should be separated from the Mongoose schema for clarity and organization.**
   - Keep Joi validation rules separate from Mongoose schema definitions to maintain clarity and avoid clutter in the schema.
   - Example:
    
     // Mongoose Schema
     const userSchema = new mongoose.Schema({
         // ...
     });

     // Joi Validation Schema
     const userValidationSchema = Joi.object({
         // ...
     });
     ```

5. **Comments should be included to provide clarity regarding the purpose of the Mongoose schema and Joi validation.**
   - Add comments to explain the purpose of the schema and validation for better understanding by other developers.
   - Example:
    
     // Mongoose Schema for defining user data structure
     const userSchema = new mongoose.Schema({
         // ...
     });

     // Joi Validation Schema for validating user input
     const userValidationSchema = Joi.object({
         // ...
     });
     ```

These guidelines aim to enhance code consistency, readability, and maintainability, ensuring that other developers can easily understand and work with the codebase.




