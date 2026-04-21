'use client';

interface WavyTextProps {
  text: string;
}

export default function WavyText({ text }: WavyTextProps) {
  return (
    <div className="wavy-text">
      {text.split('').map((char, index) => (
        <span key={index} style={{ '--i': index } as React.CSSProperties}>
          {char}
        </span>
      ))}
    </div>
  );
}
