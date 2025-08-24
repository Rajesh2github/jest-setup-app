import React from 'react';

export default function Button({ label, onClick, style }) {
  return (
    <div>
    <button style={{...style}}onClick={onClick}>{label}</button>
    </div>
  );
}
