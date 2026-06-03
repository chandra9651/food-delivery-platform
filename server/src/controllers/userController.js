const User = require("../models/User");


const getProfile = async (req, res) => {
    return res.status(200).json(req.user);
};


const updateProfile = async (req, res) => {

    try {

        const user = await User.findById(
            req.user._id
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        user.name =
            req.body.name || user.name;

        user.email =
            req.body.email || user.email;

        user.phone =
            req.body.phone || user.phone;

        user.address =
            req.body.address || user.address;

        if (req.file) {
            user.profileImage =
                `/uploads/${req.file.filename}`;
        }

        const updatedUser =
            await user.save();

        return res.status(200).json({
            message:
                "Profile updated successfully",
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                address:
                    updatedUser.address,
            },
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getProfile,
    updateProfile
}