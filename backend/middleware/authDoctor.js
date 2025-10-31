import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
            success: false, 
            message: 'Authorization required. Please provide a valid Bearer token.' 
        });
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not Authorized, Login Again' 
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Initialize req.body if it doesn't exist
        if (!req.body) {
            req.body = {};
        }
        
        req.body.docId = decoded.id;
        req.doctor = decoded;
        
        next();
    } catch (error) {
        console.log('Doctor auth error:', error);
        res.status(401).json({ 
            success: false, 
            message: 'Invalid or expired token! Please login again.', 
        });
    }
}

export default authDoctor;