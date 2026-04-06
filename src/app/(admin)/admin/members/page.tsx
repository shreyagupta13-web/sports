import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AdminMembersPage() {
  const enquiries = [
    {
      id: "enq-1",
      name: "Aarav Singh",
      email: "aarav@example.com",
      subject: "Membership trial",
      status: "new",
    },
    {
      id: "enq-2",
      name: "Mira Das",
      email: "mira@example.com",
      subject: "Sponsorship interest",
      status: "seen",
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Members & Enquiries"
        subtitle="Track membership enquiries and responses."
      />
      <div className="overflow-hidden rounded-3xl border border-border bg-bg-secondary/70">
        <table className="w-full text-sm">
          <thead className="bg-bg-elevated text-text-secondary">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="border-t border-border">
                <td className="px-4 py-3 text-text-primary">
                  {enquiry.name}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {enquiry.email}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {enquiry.subject}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  {enquiry.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
