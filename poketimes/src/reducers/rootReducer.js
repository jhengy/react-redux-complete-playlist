const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    }
  ]
}

// update root reducer to handle action dispatched from components
const rootReducer = (state = initState, action) => {
  console.log(action)
  // handler for DELETE_POST actions
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      // filter the post
      return post.id !== action.id
    })
    // note mutation of original state is not a good practice
    return {
      ...state, // spread operator clones original state
      posts: newPosts
    }
  }
  return state
}

export default rootReducer
