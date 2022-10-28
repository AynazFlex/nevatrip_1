import { forwardRef, useState } from "react";

interface IProps {
  clocks: string[]
}

type IRef = HTMLSpanElement

const Clock = forwardRef<IRef, IProps>(({clocks}, ref) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span>Ближайший рейс сегодня</span>
      <div className="card__list-clocks">
        {clocks.length <= 4 ? (
          clocks.map((clock, i) => <span key={i}>{clock}</span>)
        ) : (
          <>
            {clocks.slice(0, 3).map((clock, i) => (
              <span key={i}>{clock}</span>
            ))}
            {open &&
              clocks.slice(3).map((clock, i) => (
                <span style={{ opacity: 1 }} key={i + 3}>
                  {clock}
                </span>
              ))}
            <span ref={ref} onClick={() => setOpen(!open)}>
              {open ? "..." : "...еще"}
            </span>
          </>
        )}
      </div>
    </div>
  );
});

export default Clock;
