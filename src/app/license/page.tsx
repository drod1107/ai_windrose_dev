// src/app/license/page.tsx
export default function LicensePage() {
    return (
        <main className="prose dark:prose-invert prose-sm sm:prose-base mx-auto p-8 max-w-3xl">
            <h1>License for Use</h1>

            <h2>TL;DR for users</h2>

            <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✅</span>
                    <strong>Share it freely</strong>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✅</span>
                    <strong>Remix it freely</strong>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✅</span>
                    <strong>Use it in your classroom, group, or nonprofit</strong>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-red-600 dark:text-red-400">❌</span>
                    <strong>You May NOT Sell it</strong>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-red-600 dark:text-red-400">❌</span>
                    <strong>You may NOT charge for consulting with it</strong>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✅</span>
                    <strong>Only the author can do that - even good will on this scale doesn&apos;t actually pay bills</strong>
                </li>
            </ul>

            <p>This work is released under a Non-Commercial Use and Share License:</p>

            <h3>Free to Share</h3>
            <p>You may copy, share, and redistribute this work in any medium or format.</p>

            <h3>Free to Adapt</h3>
            <p>You may remix, transform, or build upon this work, as long as you follow these rules.</p>

            <h3>Non-Commercial Only</h3>
            <p>You may not use this work or any adaptations of it for profit, monetary gain, or commercial purposes.</p>

            <h3>Consulting Rights Reserved</h3>
            <p>Only the original author retains the right to provide consulting, training, or paid services based on this work.</p>

            <h3>Credit Required</h3>
            <p>If you share or adapt this work, you must give proper attribution to the author.</p>

            <h3>Same Freedom Forward</h3>
            <p>Any adaptations must be shared under the same license.</p>

        </main>
    );
}

