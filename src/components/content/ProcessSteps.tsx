interface ProcessStepsProps {
  steps: string[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="mt-6 space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
            {index + 1}
          </div>
          <div>
            <p className="font-medium text-slate-900">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
