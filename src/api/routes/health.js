import express from 'express'; const r=express.Router(); r.get('/',(_,res)=>res.json({ok:true,ts:Date.now()})); export default r;
