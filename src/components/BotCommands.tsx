import React, { useState } from 'react';
import { Terminal, Shield, Settings, Users, Ban, Eye, Zap } from 'lucide-react';

const CommandCategory = ({ icon: Icon, title, commands, color }: {
  icon: any;
  title: string;
  commands: Array<{name: string; description: string; usage: string}>;
  color: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="command-category">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-6 rounded-xl border transition-all duration-300 ${
          isExpanded 
            ? `${color} border-opacity-50` 
            : 'bg-white/5 border-white/10 hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.replace('bg-', 'bg-').replace('/20', '/30')}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{commands.length} commands available</p>
          </div>
        </div>
        <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 animate-slide-down">
          {commands.map((command, index) => (
            <div key={index} className="command-item">
              <div className="flex items-start justify-between mb-2">
                <code className="text-blue-400 font-mono text-lg">/{command.name}</code>
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">SLASH COMMAND</span>
              </div>
              <p className="text-gray-300 mb-2">{command.description}</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold">Usage:</span> <code className="text-gray-300">{command.usage}</code>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BotCommands = () => {
  const commandCategories = [
    {
      icon: Shield,
      title: "Security Commands",
      color: "bg-red-500/20 border-red-500",
      commands: [
        {
          name: "lockdown",
          description: "Instantly lock the server to prevent new members from joining during an attack",
          usage: "/lockdown [duration] [reason]"
        },
        {
          name: "antispam",
          description: "Configure anti-spam settings and sensitivity levels",
          usage: "/antispam [enable/disable] [sensitivity]"
        },
        {
          name: "antiraid",
          description: "Set up anti-raid protection with custom thresholds",
          usage: "/antiraid [threshold] [action]"
        },
        {
          name: "whitelist",
          description: "Add trusted users who bypass all security measures",
          usage: "/whitelist [add/remove] [@user]"
        }
      ]
    },
    {
      icon: Ban,
      title: "Moderation Commands",
      color: "bg-blue-500/20 border-blue-500",
      commands: [
        {
          name: "ban",
          description: "Ban a user with optional reason and message deletion",
          usage: "/ban [@user] [reason] [delete_days]"
        },
        {
          name: "kick",
          description: "Kick a user from the server with optional reason",
          usage: "/kick [@user] [reason]"
        },
        {
          name: "mute",
          description: "Temporarily mute a user for specified duration",
          usage: "/mute [@user] [duration] [reason]"
        },
        {
          name: "warn",
          description: "Issue a warning to a user with automatic escalation",
          usage: "/warn [@user] [reason]"
        },
        {
          name: "purge",
          description: "Bulk delete messages with various filters",
          usage: "/purge [amount] [user] [contains]"
        }
      ]
    },
    {
      icon: Settings,
      title: "Configuration Commands",
      color: "bg-purple-500/20 border-purple-500",
      commands: [
        {
          name: "setup",
          description: "Quick setup wizard for NexuSec configuration",
          usage: "/setup"
        },
        {
          name: "config",
          description: "View and modify bot configuration settings",
          usage: "/config [setting] [value]"
        },
        {
          name: "logs",
          description: "Configure logging channels and events",
          usage: "/logs [channel] [events]"
        },
        {
          name: "automod",
          description: "Configure automatic moderation rules and actions",
          usage: "/automod [rule] [action] [severity]"
        }
      ]
    },
    {
      icon: Eye,
      title: "Monitoring Commands",
      color: "bg-green-500/20 border-green-500",
      commands: [
        {
          name: "status",
          description: "View bot status and server protection statistics",
          usage: "/status"
        },
        {
          name: "threats",
          description: "View recent threats and security incidents",
          usage: "/threats [timeframe]"
        },
        {
          name: "userinfo",
          description: "Get detailed information about a user's security profile",
          usage: "/userinfo [@user]"
        },
        {
          name: "audit",
          description: "View audit logs and moderation history",
          usage: "/audit [user] [action] [timeframe]"
        }
      ]
    }
  ];

  return (
    <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Terminal className="h-4 w-4" />
            Slash Commands
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Powerful</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Command Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete control over your server security with intuitive slash commands. 
            No complex setup required - just type and protect.
          </p>
        </div>

        <div className="space-y-6">
          {commandCategories.map((category, index) => (
            <CommandCategory key={index} {...category} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg text-white font-semibold">
            <Zap className="h-5 w-5" />
            50+ Total Commands Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotCommands;