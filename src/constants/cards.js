import { ReactComponent as DepositIcon } from "../assets/icons/bank.svg";
import { ReactComponent as ClientIcon } from "../assets/icons/clients.svg";
import { ReactComponent as cashIcon } from "../assets/icons/dollar.svg";
import { ReactComponent as activeIcon } from "../assets/icons/time.svg";
import { ReactComponent as chartIcon } from "../assets/icons/histogram.svg";

export const cardItems = [
  {
    id: 1,
    title: "Depots",
    amount: 51300,
    lastIncome: 59300,
    description: "Pendant ce mois ci",
    Icon: DepositIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 2,
    title: "Interets",
    amount: 5500,
    lastIncome: 10300,
    description: "Pendant ce mois ci",
    Icon: cashIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
  {
    id: 3,
    title: "Clients",
    amount: 235,
    lastIncome: 210,
    description: "Pendant ce mois ci",
    Icon: ClientIcon,
    color: "#cc8605",
    background: "#e7dac2",
  },
];

export const cardItemsClients = [
  {
    id: 1,
    title: "Total",
    amount: 2341,
    lastIncome: 2219,
    description: "Depuis le debut",
    Icon: ClientIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 2,
    title: "Active",
    amount: 1780,
    lastIncome: 2110,
    description: "Pendant le 90 jours",
    Icon: activeIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
  {
    id: 3,
    title: "Adhesion",
    amount: 235,
    lastIncome: 210,
    description: "Pendant ce mois ci",
    Icon: chartIcon,
    color: "#cc8605",
    background: "#e7dac2",
  },
];

export const cardItemsTransaction = [
  {
    id: 1,
    title: "Total",
    amount: 2341,
    lastIncome: 2219,
    description: "Depuis le debut",
    Icon: ClientIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 2,
    title: "Total",
    amount: 1780,
    lastIncome: 2110,
    description: "Pendant le 90 jours",
    Icon: activeIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
];