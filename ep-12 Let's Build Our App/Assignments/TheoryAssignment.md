Theory:
● useContext vs Redux.

useContext  is part of the React core and is used for managing state within
the component tree. It provides a way to access the value of a context directly
within a component and its descendants. It's typically used for smaller-scale state
management needs within a component or a small section of the application.

Redux is a state management library that provides a global state container
for the entire application. It allows you to manage the application state in a
predictable and centralized manner.

● Advantage of using Redux Toolkit over Redux.

Less Boilerplate Code - Redux Toolkit helps us write less code. It provides shortcuts
that save us from typing a lot of repetitive and verbose code, making our Redux
logic cleaner and more concise.

Easier Async Operations - If our app deals with things like fetching data from a server,
Redux Toolkit makes it simpler. It has a tool called createAsyncThunk that handles
async actions in a way that's easy to understand and use.

Simpler Store Setup - Setting up your Redux store is easier with Redux Toolkit. It has
a function called configureStore that simplifies the process, and it comes with
sensible defaults, so you don't have to configure everything from scratch.

Built-in DevTools Support -  If you use Redux DevTools for debugging, Redux Toolkit
has built-in support. Enabling it is as easy as adding one line of code when setting
up your store.


● Explain Dispatcher.

In Redux, a  dispatcher  is not a standalone concept; instead, it's
a term often used to refer to a function called dispatch. The
dispatch function is a key part of the Redux store, and it plays a
crucial role in the Redux data flow.

The dispatch function is provided by the Redux store. We use it
to send actions to the store. An action is a plain JavaScript object that describes
what should change in the application's state.

● Explain Reducer.

In Redux Toolkit, the  createSlice function is commonly used to create
reducers . It simplifies the process of defining actions and the
corresponding reducer logic, reducing boilerplate code.



● Explain slice.

In Redux Toolkit, a  slice  is a collection of Redux-related code,
including reducer logic and actions, that corresponds to a
specific piece of the application state. Slices are created using
the createSlice utility function provided by Redux Toolkit. The
primary purpose of slices is to encapsulate the logic related to
a specific part of the state, making the code more modular and
easier to manage.


● Explain selector.

In Redux Toolkit, a  selector  is a function that extracts specific
pieces of data from the Redux store. It allows you to compute
derived data from the store state and efficiently access
specific parts of the state tree. Selectors play a crucial role in
managing the state in a clean and efficient way.


● Explain createSlice and the configuration it takes.

createSlice  is a utility function provided by Redux Toolkit that
simplifies the  process of creating Redux slices . A  Redux slice is a
piece of the Redux store that includes a set of actions, a reducer, and
an initial state . The createSlice function helps reduce
boilerplate code associated with defining actions and the
reducer for a specific slice of your Redux store.

name (string) A string that identifies the slice. This is used as the prefix for the
generated action types.

 initialState (any) The initial state value for the slice. This is the starting point for
your state before any actions are dispatched.

reducers (object) An object where each key-value pair represents a reducer
function. The keys are the names of the actions, and the values are the
corresponding reducer logic.

extraReducers (builder callback) A callback function that allows you to define
additional reducers outside of the reducers field. It is called with a builder object
that provides methods for adding reducers based on other action types.

slice (string) An optional string that specifies a slice of the state to be used
with the createAsyncThunk utility. This is useful when working with asynchronous actions

extraReducers (object) An alternative way to define extra reducers using an object
directly. Each key represents an action type, and the value is the corresponding
reducer function