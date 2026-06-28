import User from "../models/user.model.js"


export const getCurrentUser = async (req,res) => {
    try {
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(400).json({message:"Failed to get currentu user"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`GetCurrentUser Error ${error}`})
    }
}

export const saveAssistant = async (req,res) => {
    try {
        const {
            assistantName,
            businessName,
            businessType,
            businessDescription,
            tone,
            theme,
            geminiApiKey,
            pages,
        } = req.body

        const user = await User.findById(req.userId)
        if(!user){
            return res.status(400).json({message:"Failed to get Current user"})
        }
        user.assistantName = assistantName;
        user.businessName = businessName;
        user.businessType = businessType;
        user.businessDescription = businessDescription;
        user.tone = tone;
        user.theme = theme;

        if(geminiApiKey){
            user.geminiApiKey = geminiApiKey;
        }
        user.geminiStatus = "active";
        user.pages = pages || [];

        user.isSetupComplete =  true
        await user.save()

        return res.status(200).json({ message : "Assistant saved Successfully"})

    } catch (error) {
        return res.status(500).json({message:`Faild to save Assistant`})
    }
}
