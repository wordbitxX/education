// Curated stock imagery for the Meridian Academy concept demo.
// Resolves local semantic keys to remote optimized URLs.

const src = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const map: Record<string, string> = {
  "/images/campus-classroom.jpg": src(8617759),
  "/images/campus-lab.jpg": src(32213422),
  "/images/campus-library.jpg": src(35550999),
  "/images/campus-sports.jpg": src(7207560),
  "/images/campus-study.jpg": src(8423052),
  "/images/campus-compute.jpg": src(5530478),
  "/images/campus-hall.jpg": src(32213405),
  "/images/campus-canteen.jpg": src(35551010),
  "/images/campus-lib.jpg": src(35551059),
  classroom: src(29659894),
  elementary: src(8926406),
  engaged: src(33719271),
  interactive: src(35551059),
  biology: src(35551044),
  microscope: src(19393166),
  gym: src(7207550),
  sports: src(7335859),
  rhythm: src(7186298),
};

export function img(path: string, w = 1200, h = 800): string {
  if (map[path]) return map[path];
  return src(8617759, w, h);
}
