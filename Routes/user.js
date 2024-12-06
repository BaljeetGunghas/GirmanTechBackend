const express = require('express');
const router = express.Router();
const userRoleModel = require('../Model/userRole')
const userData = require('../Model/userData');
const getUserListWithKey = require('../Controler/getUserListWithKey');

router.get('/user', (req, res) => {
    return res.json(
        {
            output: 1,
            jsonResponse:
            {
                name: "Baljeet",
                mobile: 8685007017
            },
            message: 'ok',
            status: 200
        }
    )
})
router.get('/role', async (req, res) => {
    const alluserRoleData = await userRoleModel.find();
    return res.json(
        {
            output: 1,
            jsonResponse: alluserRoleData,
            message: 'ok',
            status: 200
        }
    )
})
router.get('/get-userData', async (req, res) => {
    const alluserRoleData = await userData.find();
    return res.json(
        {
            output: 1,
            jsonResponse: alluserRoleData,
            message: 'ok',
            status: 200
        }
    )
})


router.post('/setuserData', async (req, res) => {
    try {
        const userJson = req.body;

        if (!Array.isArray(userJson)) {
            return res.status(400).json({
                output: 0,
                message: 'Invalid data format. Expected an array of user objects.',
                status: 400,
            });
        }
        await userData.insertMany(userJson);
        const allUserRoleData = await userData.find();

        return res.json({
            output: 1,
            jsonResponse: allUserRoleData,
            message: 'User data added successfully',
            status: 200,
        });
    } catch (error) {
        console.error('Error adding user data:', error);
        return res.status(500).json({
            output: 0,
            message: 'Internal Server Error',
            status: 500,
        });
    }
});

router.post('/get-user-list', async (req, res) => {
    await getUserListWithKey(req, res);
});


module.exports = router;