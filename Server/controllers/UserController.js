import { AllUser, CreateUser, FindByEmail} from '../model/UserModel.js';


export const GetAllUsers = async (req, res) => {
    try {
        const users = await AllUser();
        res.status(200).json(users);
    } catch (error) {
        // Log the error for debugging
        console.log(`Error during fetch Users: ${error.message}`);
        // Send an appropriate error response
        res.status(500).json({message: 'Internal Server Error: unable to fetch users.'})
    }
}

export const Signup = async (req, res) => {
    
    try {
        const {username, email, password} = req.body
        // Check if the user already exists
        const CheckExistsUser = await FindByEmail(email);
        if(CheckExistsUser){
           return res.status(400).json({message: 'User already exists.'})
        }

        // create a new user
        const NewUser = await CreateUser(username, email, password);
        return res.status(200).json({
            message: 'User created successfully',
            user: {
                username: NewUser.username,
                email: NewUser.email,
            }
            
        });
    } catch (error) {
        console.error(`Error during creating user: ${error.message}`);
        return res.status(500).json({
            message: `Internal Server Error: unable to create user: ${error.message}`
        });
    }

}