import React from 'react';

interface OverviewDataProps {
    objective: string;
    implementationRequirements: { label: string; text: string }[];
    evidenceDocuments: string;
    relatedRegulations: string;
    scope: string;
}

interface OverviewTabProps {
    data: OverviewDataProps;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ data }) => {
    const rows = [
        { label: 'Objective', content: data.objective, isMulti: false },
        { label: 'Implementation\nRequirements', content: data.implementationRequirements, isMulti: true },
        { label: 'Evidence\nDocuments', content: data.evidenceDocuments, isMulti: false },
        { label: 'Related\nRegulations', content: data.relatedRegulations, isMulti: false },
        { label: 'Scope', content: data.scope, isMulti: false },
    ];

    return (
        <div className="space-y-0 border border-gray-200 rounded-lg py-2">
            {rows.map((row, index) => (
                <div
                    key={index}
                    className={`flex`}
                >
                    {/* Label Column */}
                    <div className="w-48 pl-4 pr-2 py-2 flex-shrink-0 flex">
                        <h4 className="text-slate-700 leading-tight text-sm whitespace-pre-line bg-gray-100 rounded-lg p-4 flex-1">
                            {row.label}
                        </h4>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 pl-2 pr-8 py-2 border-l border-slate-200 text-left flex">
                        {row.isMulti ? (
                            <div className="space-y-3 bg-gray-100 p-4 rounded-lg flex-1">
                                {(row.content as { label: string; text: string }[]).map((req, reqIndex) => (
                                    <div key={reqIndex} className="text-slate-600 text-sm leading-relaxed">
                                        <span className="font-semibold">{req.label}.</span> {req.text}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-600 text-sm leading-relaxed bg-gray-100 p-4 rounded-lg flex-1">
                                {row.content as string}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OverviewTab;
