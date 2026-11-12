// Başlıklarda tireli sözcükler (ör. "Hex-Zar") satır sonunda tireden bölünmesin.
// Metin içeriğine dokunmaz; yalnız tireli sözcüğü bölünmez bir span'a sarar.
export function NoBreak({ children }: { children: string }) {
  const parts = children.split(/(\S*[A-Za-z0-9\u00C0-\u024F]-[A-Za-z0-9\u00C0-\u024F]\S*)/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap">
            {p}
          </span>
        ) : (
          p
        )
      )}
    </>
  );
}
