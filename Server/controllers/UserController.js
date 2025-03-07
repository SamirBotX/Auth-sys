import { AllUser} from '../model/UserModel.js';


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