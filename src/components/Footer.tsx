import { Box, Container, Typography, Grid, Link, IconButton, Divider, Card, CardContent } from "@mui/material";
import { useAuth } from "hooks/AuthProvider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import CloudIcon from "@mui/icons-material/Cloud";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
    const userAuth = useAuth();
    
    if (userAuth.clientUid) return null;

    return (
        <Box sx={{ display: `${userAuth.showHeader ? '' : 'none'}` }}>
            <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/3 to-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Top Section with CTA */}
                <div className="relative z-10 border-b border-slate-700/50">
                    <Container maxWidth="xl" className="py-20">
                        <div className="text-center mb-16">
                            <Typography variant="h2" className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                                Ready to Get Started?
                            </Typography>
                            <Typography variant="h5" className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join thousands of educators transforming coding education with our enterprise platform.
                            </Typography>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link component={RouterLink} to="/register" className="no-underline">
                                    <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20">
                                        Start Free Trial
                                    </button>
                                </Link>
                                <Link component={RouterLink} to="/contact" className="no-underline">
                                    <button className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <Grid container spacing={4} className="mb-16">
                            {[
                                { icon: <TrendingUpIcon className="text-2xl" />, number: "99.9%", label: "Uptime SLA", gradient: "from-emerald-400 to-teal-500" },
                                { icon: <SpeedIcon className="text-2xl" />, number: "< 2s", label: "Response Time", gradient: "from-blue-400 to-indigo-500" },
                                { icon: <SupportAgentIcon className="text-2xl" />, number: "24/7", label: "Expert Support", gradient: "from-violet-400 to-purple-500" },
                                { icon: <AutoAwesomeIcon className="text-2xl" />, number: "50K+", label: "Active Users", gradient: "from-amber-400 to-orange-500" }
                            ].map((metric, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <Card className="bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer rounded-2xl">
                                        <CardContent className="p-6 text-center">
                                            <div className={`mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                                                {metric.icon}
                                            </div>
                                            <Typography variant="h4" className="font-black text-white mb-1">
                                                {metric.number}
                                            </Typography>
                                            <Typography variant="body2" className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                                {metric.label}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                {/* Main Footer Content */}
                <Container maxWidth="xl" className="py-20 relative z-10">
                    <Grid container spacing={10}>
                        {/* Company Info */}
                        <Grid item xs={12} lg={4}>
                            <div className="space-y-8">
                                <div>
                                    <Typography variant="h3" className="font-black text-4xl mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                        CodePaathshala
                                    </Typography>
                                    <Typography variant="body1" className="text-slate-300 leading-relaxed text-lg mb-6">
                                        The world's most advanced coding education platform. Trusted by leading institutions worldwide for AI-powered assessments, intelligent proctoring, and real-time analytics.
                                    </Typography>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <Typography variant="body2" className="text-emerald-400 font-semibold">
                                            Serving 50K+ Students Globally
                                        </Typography>
                                    </div>
                                </div>
                                
                                {/* Social Media */}
                                <div>
                                    <Typography variant="h6" className="font-bold text-white mb-4">
                                        Connect With Us
                                    </Typography>
                                    <div className="flex space-x-4">
                                        <IconButton 
                                            className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                                            href="https://linkedin.com/company/codepaathshala"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LinkedInIcon className="text-white" />
                                        </IconButton>
                                        <IconButton 
                                            className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-sky-500 hover:to-sky-600 transition-all duration-300 hover:scale-110 shadow-lg"
                                            href="https://twitter.com/codepaathshala"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TwitterIcon className="text-white" />
                                        </IconButton>
                                        <IconButton 
                                            className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
                                            href="https://github.com/codepaathshala"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GitHubIcon className="text-white" />
                                        </IconButton>
                                    </div>
                                </div>

                                {/* Security & Compliance */}
                                <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                                    <Typography variant="h6" className="font-bold text-white mb-4 flex items-center">
                        <Grid item xs={12} md={6} lg={3}>
                            <Typography variant="h6" className="font-bold text-white mb-6">
                                Get in Touch
                            </Typography>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <EmailIcon className="text-emerald-400" />
                                    <Link 
                                        href="mailto:contact@codepaathshala.com"
                                        className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 no-underline"
                                    >
                                        contact@codepaathshala.com
                                    </Link>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <PhoneIcon className="text-emerald-400" />
                                    <Link 
                                        href="tel:+1-555-123-4567"
                                        className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 no-underline"
                                    >
                                        +1 (555) 123-4567
                                    </Link>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <LocationOnIcon className="text-emerald-400 mt-1" />
                                    <Typography variant="body2" className="text-slate-400">
                                        123 Innovation Drive<br />
                                        Tech Valley, CA 94025<br />
                                        United States
                                    </Typography>
                                </div>

                                {/* Security Badges */}
                                <div className="mt-6 pt-4 border-t border-slate-700">
                                    <Typography variant="body2" className="text-slate-400 mb-3">
                                        Security & Compliance
                                    </Typography>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-lg">
                                            <SecurityIcon className="text-emerald-400 text-sm" />
                                            <Typography variant="caption" className="text-white font-semibold">
                                                SOC 2
                                            </Typography>
                                        </div>
                                        <div className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-lg">
                                            <VerifiedIcon className="text-blue-400 text-sm" />
                                            <Typography variant="caption" className="text-white font-semibold">
                                                ISO 27001
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                <Divider className="border-slate-700" />

                <Container maxWidth="xl" className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <Typography variant="body2" className="text-slate-400">
                                © 2024 CodePaathshala. All rights reserved.
                            </Typography>
                            <div className="flex space-x-6">
                                <Link
                                    component={RouterLink}
                                    to="/privacy"
                                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 no-underline text-sm"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/terms"
                                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 no-underline text-sm"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/cookies"
                                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 no-underline text-sm"
                                >
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <Typography variant="body2" className="text-slate-400">
                                System Status: All systems operational
                            </Typography>
                        </div>
                    </div>
                </Container>
            </footer>
        </Box>
    );
}