import {render,screen} from "@testing-library/react"
import {Provider} from "react-redux"
import "@testing-library/jest-dom"
import appStore from "../utils_js/appStore"
import Header from "../Header"
import { BrowserRouter} from "react-router-dom"
// import {auth} from "../utils.js/Firebase"




// test("GPT test desc", () => {
//   render(<Provider store={appStore}><Header/></Provider>);
//   const searchButton =  screen.getByRole("button");
//   expect(searchButton).toBeInTheDocument();
//   })

// jest.mock("../utils.js/Firebase",()=>{
//      return {
//              ...jest.requireActual("../utils.js/firebase"), // Use the actual implementation for other methods
//              auth: {
//                getAuth: jest.fn(),
//                onAuthStateChanged: jest.fn(),
//      }
//  }});

// auth.onAuthStateChanged.mockReturnValue((callback) => {
//   // Mock an authenticated user object
//   const mockUser = {
//     uid: 'mocked-uid',
    
//   };

//   callback(mockUser);
//   return jest.fn(); // You can return a function to unsubscribe
// });

// // const mockAuth=jest.fn();

// // beforeEach(()=>{
// //     jest.clearAllMocks();
// //     auth.getAuth.mockReturnValue(mockAuth);

// // })

describe("GPT Search Button",()=>{
    
test("GPT search button renders in header component",async ()=>{
    // mockAuth.isAuthenticated= true;
    render(<BrowserRouter><Provider store={appStore}><Header/></Provider></BrowserRouter>);
    

    const searchButton = screen.getByRole("button")
    expect(searchButton).toBeInTheDocument()
})
})