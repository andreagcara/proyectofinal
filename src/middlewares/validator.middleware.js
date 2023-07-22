export const validateSchema = (schema) => (req, res, next) => {
    try{
        schema.parse(req.body);
        next();
    }catch(error){
        return res.status(400).json(error.errors.map((error) => error.message));
    }
}; 
//Este archivo se encarga de validar los campos del formulario de registro