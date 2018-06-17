import React from 'react'

export default class NoteList extends React.Component {
  handleClickItem(id) {
    this.props.onSelect(id)
  }

  renderItem(note) {
    const classNames = ['NoteList-item']

    if (this.props.selectedNoteId === note.id) {
      classNames.push('is-selected')
    }

    return <li
      className={classNames.join(' ')}
      key={note.id}
      onClick={() => this.props.onSelect(note.id)}
    >
      {note.title}
    </li>
  }

  render() {
    const items = this.props.notes.map(note => {
      return this.renderItem(note)
    })

    return <div className="NoteList">
      <ul>{items}</ul>
    </div>
  }
}
