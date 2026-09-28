import {
  Activity,
  Ambulance,
  Baby,
  BedDouble,
  Bone,
  Brain,
  CalendarCheck,
  HeartPulse,
  Eye,
  Pill,
  Rabbit,
  Radiation,
  Scan,
  ScanLine,
  Siren,
  Stethoscope,
  Syringe,
  TestTubes,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Activity,
  Ambulance,
  Baby,
  BedDouble,
  Bone,
  Brain,
  CalendarCheck,
  HeartPulse,
  Eye,
  MonitorHeart: Activity,
  Pill,
  Rabbit,
  Radiation,
  Scan,
  ScanLine,
  Siren,
  Stethoscope,
  Syringe,
  TestTubes,
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Activity;
  return <Cmp className={className} aria-hidden="true" />;
}
