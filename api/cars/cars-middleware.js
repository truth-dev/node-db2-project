
const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
try {
  const checkCar = await Car.get(req.params.id);
  if(!checkCar){
    res.status(404).json({
      message:'car with id <car id> is not found'
    })
  }else{
    req.checkCar = checkCar;
  }
}catch (err) {
next(err)
}
}

const checkCarPayload = async (req, res, next) => {
 try {
  const {vin_num, cars_make, cars_model, mileage, cars_id} = await req.body

  if(!vin_num || !cars_make || !cars_model || mileage || cars_id) {
    res.status(400).json({
      message: 'missing field names: vin_num, cars_model, mileage, and or cars_id'
    })
  }else{
    next()
  }

 } catch (err) {
 next(err)
 }
}

const checkVinNumberValid = async (req, res, next) => {
   try {
    const vin_num = req.body.vin_num; 

    const vinRegex = '[A-JH-NPR-ZO-9]{17}$';
 
     if(!vinRegex.test(vin_num)) {
      return res.status(400).send({message:'invaild VIN number'})
     }
     next()
   }catch(err){
    next(err)
   }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}