export const fetch = async (req, res) => {
    try {
        res.json("Hellow World!")
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}