
export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{ border: "3px solid grey", borderRadius: "10px",padding: "20px",margin: "10px",width: "300px"}}>
      <h2><em><u>Titre</u> : {titre}</em></h2>
      <p><em><u>Auteur</u> : {auteur}</em></p>
      <p><em><u>Statut</u> : {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</em></p>
      <button
        style={{padding: "10px",marginTop: "2px",borderRadius: "5px",border: "1px solid grey",backgroundColor: estDisponible ? "#16a34a" : "#dc2626",
        }} onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}
