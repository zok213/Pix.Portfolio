import React from "react";

const ComingSoon = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
            <div className="text-center text-white p-8 rounded-xl bg-black/40 border border-white/10 shadow-2xl max-w-md mx-4">
                <div className="mb-6">
                    <img
                        src="/images/logo bo goc.png"
                        alt="PiXerse Logo"
                        className="h-24 w-auto mx-auto mb-4 object-contain"
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight">Coming Soon</h1>
                <p className="text-lg text-gray-200 mb-6">
                    We are currently working hard to bring you an amazing experience. Stay tuned!
                </p>
                <div className="w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>
        </div>
    );
};

export default ComingSoon;
