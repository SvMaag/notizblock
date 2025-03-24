// notizen anzeigen lassen
// ich bruache notizen
let notesTitle = [];
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];

//-> wann werden sie angezeigt?
function renderNotes(){
// ich muss definieren wo sie anzuzeigen sind
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTempate(indexNote);
    }
};



function renderTrashNotes() {
    // ich muss definieren wo sie anzuzeigen sind
    let trashContentRef = document.getElementById('trashcontent');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTempate(indexTrashNote);
    }
}



function getNoteTempate(indexNote){
    return `<p>+ title: ${notesTitle[indexNote]} -> ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">X</button></p>`;
};   


function getTrashNoteTempate(indexTrashNote){
    return `<p>+ ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
};  

// global speichern

// notizen hinzufügen
     // eingabe von user definieren
function addNote(){
     //eingabe auslesen
    let noteTitleInputRef = document.getElementById('note_titleinput');
    let noteTitleInput = noteTitleInputRef.value;
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    //eingabe den Notizen hinzufügen
    notesTitle.push(noteTitleInput);
    notes.push(noteInput);
    // eingabe anzeigen lassen
    renderNotes();
    saveNotesToLocalStorage();
    noteTitleInputRef.value = "";
    noteInputRef.value = "";  
}

// notizen löschen
    //welche Notiz muss gelöscht werden
function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1)[0];
    let trashNoteTitle = notesTitle.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
    trashNotesTitles.push(trashNoteTitle);
    //wann muss die Notziz gelöscht werden
    renderNotes();
    renderTrashNotes();
    saveNotesToLocalStorage(); // Notizen speichern
    saveTrashToLocalStorage(); // Papierkorb speichern
}

function saveNotesToLocalStorage(){
    localStorage.setItem("notes",JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitle));
}

function saveTrashToLocalStorage() {
    localStorage.setItem("trash",JSON.stringify(trash))
    localStorage.setItem("trashTitles", JSON.stringify(trashNotesTitles));

}

//Loade Data first open side
loadFromLocalStorage();
//nozizen archivieren