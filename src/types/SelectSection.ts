export interface SelectSection {
            label: string;
            fieldName: string;
            defaultValue: string;
            options: {
                        value: string;
                        label: string;
                        avatar?: string;
                        statusColor?: string;
                        textColor?: string;
            }[];
            icon?: React.ReactNode;
}


