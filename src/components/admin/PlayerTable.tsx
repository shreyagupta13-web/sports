import type { Player } from "@/types/player";

export function PlayerTable({ players }: { players: Player[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-bg-secondary/70">
      <table className="w-full text-sm">
        <thead className="bg-bg-elevated text-text-secondary">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Sport</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-t border-border">
              <td className="px-4 py-3 text-text-primary">
                {player.full_name}
              </td>
              <td className="px-4 py-3 text-text-secondary">
                {player.position}
              </td>
              <td className="px-4 py-3 text-text-secondary">
                {player.membership_status ?? "active"}
              </td>
              <td className="px-4 py-3 text-text-secondary">
                <button className="mr-2 text-accent-lime">Edit</button>
                <button className="text-accent-orange">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
