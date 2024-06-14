export const signUpreducer = (state, action) => {
    switch (action.type) {
        case "FIRSTNAME":
            return { ...state, firstname: action.payload }
        case "LASTNAME":
            return { ...state, lastname: action.payload }
        case "EMAIL":
            return { ...state, email: action.payload }
        case "PASSWORD":
            return { ...state, password: action.payload }
        case "ADDRESS":
            return { ...state, address: action.payload }
        case "TELEPHONE":
            return { ...state, phoneNum: action.payload }

        case 'RESET':
            return { ...state, firstname: "", lastname: "", email: "", password: "", address: "", phoneNum: "" }


        default:
            return new Error("invalid input")
    }
};

export const loginReducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        default:
            throw new Error("invalid input")
    }
};


export const emailforPassword = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload }

        default:
            throw new Error('invalid error')

    }

};

export const passwordResetReducer = (state, action) => {
    switch (action.type) {
        case 'PASSWORD':
            return { ...state, password: action.payload }

        case 'CONFIRM_PASSWORD':
            return { ...state, confirm_password: action.payload}

        default:
            throw new Error('invalid error')

    }

};


export  function LoadingComponent() {
    return (
      <>
        <div className='loadingParent'>
          <div className='loadingChild'></div>
          
        </div>
        
      </>
    )
  }
  export const adminSignUpResucer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return { ...state, name: action.payload }
        case "EMAIL":
            return { ...state, email: action.payload }
        case "PASSWORD":
            return { ...state, password: action.payload }
        case "ROLE":
            return { ...state, role: action.payload }

        case 'RESET':
            return { ...state, name: "", email: "", password: "", role: "" }


        default:
            return new Error("invalid input")
    }
};

export const adminLoginReducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        default:
            throw new Error("invalid input")
    }
};


export const riderSigupReducer = (state, action) => {
    switch(action.type) {
        case 'NAME':
            return { ...state, name: action.payload }
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        case 'PHONENUM':
            return { ...state, phoneNum: action.payload }
        case 'RIDETYPE':
            return { ...state, rideType: action.payload }
        case 'RIDEPLATENUM':
            return { ...state, ridePlateNum: action.payload   }
        default:
            throw new Error('invalid input') 


    }
};

export const riderLoginReducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        default:
            throw new Error("invalid input")
    }
};

export const foodTypeReducer = (state, action) =>{
    switch (action.type) {
        case "NAME":
            return { ...state, name: action.payload }
        case "DESCRIPTION":
            return { ...state, description: action.payload }
        case "IMAGE":
            return { ...state, image: action.payload }
        case "PRICE":
            return { ...state, price: action.payload }
        case "CATEGORY":
            return { ...state, category: action.payload }
        case "INGREDIENTS":
            return { ...state, ingredients: action.payload }
        case 'RATING':
            return { ...state, rating: action.payload}


    }
}


