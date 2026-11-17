
import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Developpement", auteur: "Abir Moustapha", estDisponible: false },
    { id: 2, titre: "La Pauvreté", auteur: "Hammad Adoum", estDisponible: false },
    { id: 3, titre: "La Misère", auteur: "Ayman Adam", estDisponible: true },
    { id: 4, titre: "L'Étranger", auteur: "Malaz Ibrahim", estDisponible: false },
  ]);
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((b) => b.id === bookId  ? { ...b, estDisponible: !b.estDisponible }  : b));
  };
  const ajouterLivre = (e) => {
    e.preventDefault();
    if (titre.trim() === "" || auteur.trim() === "") {
      alert("Remplir tous les champs");
      return;
    }
    const nouveauLivre = { id: books.length + 1,  titre: titre,  auteur: auteur, estDisponible: true,
    };
    setBooks([...books, nouveauLivre]);
    setTitre("");
    setAuteur("");
  };
  return (
    <div style={{ padding: "10px" }}>
      <h2><strong><u><i>Gestion de Bibliotheque</i></u></strong></h2>
      <h4>
       <em>Nombre de livres disponibles : {books.filter((b) => b.estDisponible).length}</em>
      </h4>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {books.map((b) => (
          <BookCard titre={b.titre} auteur={b.auteur} estDisponible={b.estDisponible}  key={b.id}  onClickEmprunt={() => onClickEmprunt(b.id)} />
        ))}
      </div>
      <form onSubmit={ajouterLivre}>
        <h2><i>Ajouter un livre</i></h2>
        <input type="text" placeholder="Titre du livre" value={titre} 
        onChange={(e) => setTitre(e.target.value)} />
        <input type="text" placeholder="Nom de l'auteur" value={auteur} 
        onChange={(e) => setAuteur(e.target.value)}/>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
