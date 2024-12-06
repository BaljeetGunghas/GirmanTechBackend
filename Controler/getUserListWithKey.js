const userData = require("../Model/userData");

const getUserListWithKey = async (req, res) => {
    try {
        const { searchString } = req.body;

        if (!searchString) {
            return res.status(400).json({
                output: 0,
                message: 'Search string is required',
                status: 400,
                jsonResponse: null,
            });
        }

        const users = await userData.find({
            $or: [
                { first_name: { $regex: searchString, $options: 'i' } },
                { last_name: { $regex: searchString, $options: 'i' } }
            ]
        }, {
            first_name: 1,
            last_name: 1,
            city: 1,
            contact_number: 1,
            _id: 1
        })

        // Return the filtered user list
        return res.json({
            output: users.length,
            jsonResponse: users.length > 0 ? users : null,
            message: 'ok',
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching user list:', error);
        return res.status(500).json({
            output: 0,
            message: 'Internal Server Error',
            status: 500,
        });
    }
}

module.exports = getUserListWithKey;