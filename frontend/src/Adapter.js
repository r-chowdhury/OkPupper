class Adapter {
  static async getDogData(args) {
    const {zipCode, size, gender, age, callbackFunction} = args

    let result = await fetch('http://localhost:3000/dogs/get_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dog: {
          zipCode,
          size,
          gender,
          age
        }
      })
    })

    let dogs = await result.json()

    if (dogs.length) {
      let formattedDogs = dogs.map(dog => ({
        pet_finder_id: dog.pet_finder_id,
        name: dog.name,
        age: dog.age,
        size: dog.size,
        breed: dog.breed,
        sex: dog.sex,
        description: dog.description,
        last_update: dog.last_update,
        photos: dog.photos
      }))

      return callbackFunction(formattedDogs)
    } else {
      return "No dogs matching criteria"
    }
  }

  static async saveDogResult(petFinderId, isUserSaving) {
    let result = await fetch('http://localhost:3000/user_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_dog: {
          userId: 5,
          petFinderId,
          isUserSaving
        }
      })
    })

    let dogs = await result.json()
  }
}

export default Adapter