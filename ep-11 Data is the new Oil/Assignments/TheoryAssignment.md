
1 - What is prop drilling?

In React,  prop drilling  refers to the process of  passing down props
(short for properties) through multiple layers of nested components .
This happens when a piece of data needs to be transferred
from a higher-level component to a deeply nested child
component, and it must pass through several intermediary
components in between.


2 - What is lifting the state up?

Lifting state up  in React refers to the practice of  moving the state
from a lower-level (child) component to a higher-level (parent or common
ancestor) component in the component tree . This is done to share and
manage state across multiple components

3 - What is Context Provider and Context Consumer?

The Context Provider is a  component that allows
its children to subscribe to a context's changes . It accepts a value
prop, which is the data that will be shared with the components
that are descendants of this provider. The Provider component
is created using  React.createContext()  and then rendered as part
of the component tree. It establishes the context and provides
the data to its descendants. 

The Context Consumer is a component that subscribes to the
changes in the context provided by its nearest Context Provider ancestor. It allows
components to access the context data without the need for prop drilling. The
Consumer component is used within the JSX of a component to consume the
context data. It takes a function as its child, and that function receives the current
context value as an argument.

4 - If you don’t pass a value to the provider does it take the default value?

Yes, If we don't pass a value to the Provider in React's Context
API,  it does use the default value specified when creating the context
using React.createContext(defaultValue) .
