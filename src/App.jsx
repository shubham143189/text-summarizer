
// Simple Text Summarizer - React + Tailwind (UI only)
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TextSummarizer() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    // This would normally call an API
    setSummary('This is a placeholder summary for the provided text.');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">📝 Text Summarizer</h1>
      <Card className="w-full max-w-2xl">
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your long text here..."
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleSummarize} className="w-full">Summarize</Button>
        </CardContent>
      </Card>

      {summary && (
        <Card className="w-full max-w-2xl mt-6 bg-white">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Summary:</h2>
            <p>{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
