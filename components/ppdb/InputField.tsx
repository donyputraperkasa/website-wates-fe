import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
};

export default function InputField({
    icon: Icon,
    name,
    value,
    onChange,
    placeholder,
    error,
}: Props) {
    return (
        <>
        <div className="relative group">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
            <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full border ${
                error
                ? "border-red-500 focus:ring-red-100"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
            } focus:ring-2 outline-none pl-10 py-3 rounded-xl transition-all duration-300 shadow-sm focus:shadow-md`}
            required
            />
        </div>
        {error && <p className="text-sm text-red-500 -mt-2">{error}</p>}
        </>
    );
}