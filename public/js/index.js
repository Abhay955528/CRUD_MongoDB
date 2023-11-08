const newBook = document.getElementById("my-form");
const oldTitle = document.getElementById("title");
const oldAuthor = document.getElementById("author");
const oldSummary = document.getElementById("summary");
let color = 1;

newBook.addEventListener("submit", newBooks);

async function newBooks(e) {
  try {
    e.preventDefault();
    const newTitle = oldTitle.value;
    const newAuthor = oldAuthor.value;
    const newSummary = oldSummary.value;
    const book = {
      newTitle,
      newAuthor,
      newSummary,
    };
    console.log(book);
    const response = await axios.post(
      "http://localhost:3500/user-newBooks",
      book
    );

    console.log(response.data.message);
    showonScreen(response.data.newBook);

    oldTitle.value = "";
    oldAuthor.value = "";
    oldSummary.value = "";
  } catch (error) {
    console.log(error);
  }
}

function showonScreen(book) {
  try {
    const parent = document.getElementById("book-showOnScreen");
    const child = document.createElement("li");
    document.getElementById("show-allBook").innerHTML = "All Book Present";

    if (color == 0) {
      child.style = "background:rgb(227 227 227)";
      color = 1;
    } else {
      color = 0;
    }

    child.appendChild(
      document.createTextNode(
        `${book.title} - ${book.author} - ${book.summary}`
      )
    );

    //! ceate Delete button

    const deleteButton = document.createElement("input");
    deleteButton.value = "Delete";
    deleteButton.id = "dltBtn";
    deleteButton.type = "button";
    deleteButton.style = "color:red";

    deleteButton.onclick = async(e) => {
      alert("Are you sure ?");
      const response = await axios.delete(`http://localhost:3500/user-dltBooks${book._id}`);
      console.log(response.data.message);
      parent.removeChild(child);
    };

    //! ceate Edit button

    const editButton = document.createElement("input");
    editButton.value = "Edit";
    editButton.id = "editBtn";
    editButton.type = "button";
    editButton.style = "color:green";

    editButton.onclick = async(e) => {
      parent.removeChild(child);
      oldTitle.value = book.title;
      oldAuthor.value = book.author;
      oldSummary.value = book.summary;
      const response = await axios.delete(`http://localhost:3500/user-dltBooks${book._id}`);
      console.log(response.data.message);
    };


    child.appendChild(editButton);
    child.appendChild(deleteButton);
    parent.appendChild(child);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("DOMContentLoaded", refreshPage);

async function refreshPage() {
  const response = await axios.get("http://localhost:3500/user-allBooks");

  for (let i = 0; i < response.data.allBook.length; i++) {
    showonScreen(response.data.allBook[i]);
  }
  console.log(response.data);
}
