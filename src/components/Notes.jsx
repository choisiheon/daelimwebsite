import { useState } from 'react';
import dayjs from 'dayjs';

function Notes(props) {
  const { styleData } = props;
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteText, setEditNoteText] = useState('');

  const createNote = () => {
    const note = {
      id: notes.length + 1,
      text: newNote,
      date: dayjs(),
      edate: '' // 초기에는 수정 시각은 없음
    };
    setNotes([...notes, note]);
    setNewNote('');
  };

  const updateNote = (id) => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, text: editNoteText, edate: dayjs() } : note
      )
    );
    setEditNoteId(null);
    setEditNoteText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div style={styleData}>
      <h2>메모</h2>
      <input
        type="text"
        placeholder="새 메모 입력"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={createNote}>메모 추가</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {editNoteId === note.id ? (
              <div>
                <input
                  type="text"
                  value={editNoteText}
                  onChange={(e) => setEditNoteText(e.target.value)}
                />
                <button onClick={() => updateNote(note.id)}>저장</button>
                <button onClick={() => setEditNoteId(null)}>취소</button>
              </div>
            ) : (
              <div>
                {note.text} , {note.date.format('MM월 DD일 HH시 mm분 ss초 저장됨.')}
                {note.edate && ` 수정됨: ${note.edate.format('MM월 DD일 HH시 mm분 ss초')}`}
                <button onClick={() => {
                  setEditNoteId(note.id);
                  setEditNoteText(note.text);
                }}>수정</button>
                <button onClick={() => deleteNote(note.id)}>삭제</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
