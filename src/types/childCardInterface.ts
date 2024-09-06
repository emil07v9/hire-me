export interface ChildCardProps {
  id: string;
  name: string;
  checkedIn: boolean;
  onCheckin: (id: string) => void;
  onCheckout: (id: string) => void;
}
