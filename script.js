// notizen anzeigen lassen
// ich bruache notizen
let notes = ['banana','rasen mähen'];
//-> wann werden sie angezeigt?


function renderNotes(){
// ich muss definieren wo sie anzuzeigen sind
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        contentRef.innerHTML += getNoteTempate(note);
    }

};

function getNoteTempate(note){
    return `<p>+ ${note}</p>`;
}

// global speichern

// notizen hinzufügen
     // eingabe von user definieren
function addNote(){
     //eingabe auslesen
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    //eingabe den Notizen hinzufügen
    notes.push(noteInput);
    // eingabe anzeigen lassen
    renderNotes();

}

// notizen löschen

//nozizen archivieren