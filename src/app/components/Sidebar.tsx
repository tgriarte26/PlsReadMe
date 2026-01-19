"use client";

type SidebarProps = {
  formData: {
    title: string;
    description: string;
    installation: string;
    usage: string;
    license: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      installation: string;
      usage: string;
      license: string;
    }>
  >;
};

export default function Sidebar({ formData, setFormData }: SidebarProps) {
  return (
    <div className="flex flex-col gap-4">
      <input 
        type="text"
        placeholder="Project Title"
        value={formData.title}
        onChange={(e) => 
          setFormData((prev) => ({ ...prev, title: e.target.value}))
        }
      >

      </input>
    </div>
  );
}
